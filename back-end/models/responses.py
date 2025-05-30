from config import Config
from datetime import datetime
from urllib import parse


class Response:
    @staticmethod
    def sever_error(msg, rsp=None):
        return {'description': msg, 'response': rsp}, 500

    @staticmethod
    def client_error(msg, rsp=None):
        return {'description': msg, 'response': rsp}, 400

    @staticmethod
    def not_found(msg, rsp=None):
        return {'description': msg, 'response': rsp}, 404

    @staticmethod
    def forbidden(msg, rsp=None):
        return {'description': msg, 'response': rsp}, 403

    @staticmethod
    def response(msg, rsp=None):
        return {'description': msg, 'response': rsp}, 200

    @staticmethod
    def unauthorized(msg, rsp=None):
        return {'description': msg, 'response': rsp}, 401

    @staticmethod
    def jodit_get_all(files):
        return {
            "success": True,
            "time": datetime.now().strftime('%Y-%m-%d %I:%M:%S'),
            "data": {
                "sources": [
                    {
                        "name": "default",
                        "baseurl": parse.urljoin(Config.HOME_PAGE_URL, '/api/image/'),
                        "path": "",
                        "files": files
                    }
                ],
                "code": 220
            },
            "elapsedTime": 0
        }, 200

    @staticmethod
    def jodit_post_one(files: str):
        return {
            "success": True,
            "time": datetime.now().strftime('%Y-%m-%d %I:%M:%S'),
            "data": {
                "baseurl": parse.urljoin(Config.HOME_PAGE_URL, '/api/image/'),
                "messages": ['image uploaded'],
                "files": [
                    files
                ],
                "isImages": [
                    True
                ],
                "code": 220
            },
            "elapsedTime": 0
        }, 200
    
    @staticmethod
    def jodit_delete_one():
        return {
                "success": True,
                "time": datetime.now(),
                "data": {
                    "code": 220
                },
                "elapsedTime": 0
            }, 200