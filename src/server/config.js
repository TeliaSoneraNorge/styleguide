const env = process.env.NODE_ENV || 'development';

const configs = {
    production: {
        environment: 'production'
        // More config can go here...
    },
    development: {
        environment: 'development'
        // More config can go here...
    }
};

export function getConfig() {
    return configs[env];
}