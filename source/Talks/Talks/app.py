import os
import tornado.web
import tornado.websocket
import tornado.httpserver
import tornado.ioloop


class IndexPageHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html")

class Application(tornado.web.Application):
    def __init__(self):
        
        bundle_path = '/dist/assets/bundle.js'
        
        handlers = [
            (r'/', IndexPageHandler),
            (r"/(.*)", tornado.web.StaticFileHandler, {"path":r"{0}".format(os.path.join(os.path.dirname(__file__),"dist/assets"))})
        ]

        settings = {
            'template_path': "dist",
            "static_path": os.path.join(os.path.dirname(__file__), "dist"),
        }
        tornado.web.Application.__init__(self, handlers, **settings)

if __name__ == '__main__':
    app = Application()
    server = tornado.httpserver.HTTPServer(app)
    server.listen(8080)
    tornado.ioloop.IOLoop.instance().start()