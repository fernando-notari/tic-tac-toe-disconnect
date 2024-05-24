exports.handler = async (event) => {
    console.log('Disconnected:', event.requestContext.connectionId);
    return { statusCode: 200, body: 'Disconnected.' };
};