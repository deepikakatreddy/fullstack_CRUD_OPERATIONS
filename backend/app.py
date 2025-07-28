from flask import Flask, request, jsonify
from flask_cors import CORS
CORS(app)

import db

app = Flask(__name__)

# Initialize DB
db.init_db()

@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    if not all(k in data for k in ("first_name", "last_name", "email", "password")):
        return jsonify({"error": "Missing fields"}), 400

    try:
        user_id = db.add_user(data['first_name'], data['last_name'], data['email'], data['password'])
        return jsonify({"message": "User created", "id": user_id}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/users', methods=['GET'])
def get_users():
    users = db.get_all_users()
    return jsonify(users)

@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = db.get_user_by_id(user_id)
    if user:
        return jsonify(user)
    return jsonify({"error": "User not found"}), 404

@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    data = request.get_json()
    updated = db.update_user(user_id, data)
    if updated:
        return jsonify({"message": "User updated"})
    return jsonify({"error": "User not found or not updated"}), 404

@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    deleted = db.delete_user(user_id)
    if deleted:
        return jsonify({"message": "User deleted"})
    return jsonify({"error": "User not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)
