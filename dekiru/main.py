import logging
import os
import sys

import aiohttp_jinja2
import jinja2
from aiohttp import web

from db import init_pg, close_pg
from routes import setup_routes
from settings import get_config


async def init_app(argv=None):

    app = web.Application()

    app['config'] = get_config(argv)
    aiohttp_jinja2.setup(app, loader=jinja2.FileSystemLoader('%s/templates/' % os.path.dirname(__file__)))
    app.on_startup.append(init_pg)
    app.on_cleanup.append(close_pg)
    setup_routes(app)
    # setup_middlewares(app)
    return app


def main(argv):
    logging.basicConfig(level=logging.DEBUG)

    app = init_app(argv)

    config = get_config(argv)
    web.run_app(app,
                host=config['host'],
                port=config['port'])


if __name__ == '__main__':
    main(sys.argv[1:])