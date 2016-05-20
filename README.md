# hapi-requesting-json

Add the method `isRequestingJson()` to the request object.
It simply checks that `application/json` is in the `Accepts` header.

## Installing

Install it via NPM

```
npm install Votion/hapi-requesting-json --save
```

If you use Glue to register plugins in Hapi, then add the following to your manifest.

```javascript
{
    registrations: [
        {
            plugin: {
                register: 'hapi-requesting-json'
            }
        }
    ]
}
```

If you are manually registering the plugins in Hapi, add the following:

```javascript
server.register({
    register: require('hapi-requesting-json')
}, (err) => {
});
```

## Usage

```javascript
server.route({
    method: 'GET',
    path: '/my-route',
    handler: function showComplete(request, reply) {
        if (request.isRequestingJson()) {
            return reply({foo: 'bar'});
        } else {
            return reply('<html><body>Hello</body></html>');
        }
    }
});
```