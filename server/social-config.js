// note to self: ServiceConfiguration is a meteor plugin

ServiceConfiguration.configurations.remove({
    service: 'facebook'
});

ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '338088179727504',
    secret: '5d2867a569bec0d8be02550adf5783f3'
});
