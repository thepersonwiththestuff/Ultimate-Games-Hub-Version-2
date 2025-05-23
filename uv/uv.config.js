
self.__uv$config = {
    prefix: '/service/',

    /* Bare server URL */ 
    bare: 'https://bare.benrogo.net', 'bare-ovh-res-1.benrogo.net',
    
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    client: '/uv/uv.client.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
