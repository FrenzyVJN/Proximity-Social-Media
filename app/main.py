from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, String, Float
from uuid import uuid4
import json
from flask_cors import CORS

app = Flask(__name__)

# Enable CORS for the Flask app
CORS(app)

# SQLite3 configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///posts.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Post Model
class Post(db.Model):
    id = Column(String, primary_key=True, default=lambda: str(uuid4()))
    title = Column(String, nullable=False)
    content = Column(String, nullable=False)
    createdLat = Column(Float, nullable=False)
    createdLong = Column(Float, nullable=False)
    other = Column(String)

@app.route('/createPost', methods=['POST'])
def create_post():
    data = request.json
    post = Post(title=data['title'], content=data['content'], createdLat=data['createdLat'], createdLong=data['createdLong'], other=json.dumps(data.get('other', {})))
    db.session.add(post)
    db.session.commit()
    return jsonify({"message": "Post created", "id": post.id}), 201

@app.route('/getPosts', methods=['GET'])
def get_posts():
    posts = Post.query.all()
    return jsonify([{"id": post.id, "title": post.title, "content": post.content, "createdLat": post.createdLat, "createdLong": post.createdLong, "other": post.other} for post in posts]), 200

@app.route('/getPost/<id>', methods=['GET'])
def get_post(id):
    post = Post.query.get(id)
    if post:
        return jsonify({"id": post.id, "title": post.title, "content": post.content, "createdLat": post.createdLat, "createdLong": post.createdLong, "other": post.other}), 200
    return jsonify({"message": "Post not found"}), 404

@app.route('/updatePost/<id>', methods=['PUT'])
def update_post(id):
    post = Post.query.get(id)
    if post:
        data = request.json
        post.title = data['title']
        post.content = data['content']
        post.createdLat = data['createdLat']
        post.createdLong = data['createdLong']
        post.other = json.dumps(data.get('other', {}))
        db.session.commit()
        return jsonify({"message": "Post updated"}), 200
    return jsonify({"message": "Post not found"}), 404

@app.route('/deletePost/<id>', methods=['DELETE'])
def delete_post(id):
    post = Post.query.get(id)
    if post:
        db.session.delete(post)
        db.session.commit()
        return jsonify({"message": "Post deleted"}), 200
    return jsonify({"message": "Post not found"}), 404

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)
