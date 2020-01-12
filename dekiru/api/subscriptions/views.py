

async def send_request(request):
    async with request.app['db'].acquire() as conn:
        pass
