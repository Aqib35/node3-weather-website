const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d146a0967859052c2225ecc20bfeedf9&query=' + longitude + ',' + latitude + '&units=f'
    
    request({url, json: true}, (error, { body }) => {
        if (error){
            callback('Unable to connect to weather service!', undefined)
        } else if(body.error){
            callback('Unable to find the location.')
        } else {
             callback(undefined, body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The humidity is ' + body.current.humidity)
        }
    })
}

module.exports = forecast