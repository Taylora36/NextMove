"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import requests
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

# Create Flask app
api = Blueprint('api', __name__)

# Hard-Coded state names & fips codes
fips = {
    "AL": "01",
    "AK": "02",
    "AZ": "04",
    "AR": "05",
    "CA": "06",
    "CO": "08",
    "CT": "09",
    "DE": "10",
    "DC": "11",
    "FL": "12",
    "GA": "13",
    "HI": "15",
    "ID": "16",
    "IL": "17",
    "IN": "18",
    "IA": "19",
    "KS": "20",
    "KY": "21",
    "LA": "22",
    "ME": "23",
    "MD": "24",
    "MA": "25",
    "MI": "26",
    "MN": "27",
    "MS": "28",
    "MO": "29",
    "MT": "30",
    "NE": "31",
    "NV": "32",
    "NH": "33",
    "NJ": "34", # fails
    "NM": "35", # fails
    "NY": "36", # Fails at rendering causing the above 2 states to display empty cards
    "NC": "37",
    "ND": "38",
    "OH": "39",
    "OK": "40",
    "OR": "41",
    "PA": "42",
    "RI": "44",
    "SC": "45",
    "SD": "46",
    "TN": "47",
    "TX": "48",
    "UT": "49",
    "VT": "50",
    "VA": "51",
    "WA": "53",
    "WV": "54",
    "WI": "55",
    "WY": "56",
}

# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.

@api.route("/signup", methods=["POST"])
def signup():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).first()

    if user is not None:
        return jsonify(message = "User already exists")

    user = User(email = email, password = password)
    db.session.add(user)
    db.session.commit()
    return jsonify(message = "User created")

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).first()
    if user is not None:
        if user.check_password_hash(password):
            access_token = create_access_token(identity=email)
            return jsonify(access_token=access_token)
    return jsonify({"msg": "Invalid cedentials."}), 401

@api.route("/highlights/<string:url_state>", methods=["GET"])
def get_state_highlights(url_state):
    print('route reached')
    fips_code = fips[
       url_state.upper()
    ]
    print(fips_code)

    url = "https://data.census.gov/api/profile/content/highlights"
    payload = {
        'g': f"040XX00US{fips_code}"
    }

    request = requests.get(url, params=payload)

    highlights = request.json()["highlights"]
    
    population = filter(
        lambda item : item["label"] == "Total Population",
        highlights
    )

    medIncome = filter(
        lambda item : item["label"] == "Median Household Income",
        highlights
    )

    return jsonify({
        "stateName": request.json()["selectedProfile"]["label"],
        "population": list(population)[0],
        "medIncome": list(medIncome)[0]
    })
    
