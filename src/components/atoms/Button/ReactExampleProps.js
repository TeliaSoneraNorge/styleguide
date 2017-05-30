export default [
    { text: 'Default button', onClick: () => console.log('foo') },
    { text: 'Positive button', kind: 'positive', onClick: () => console.log('bar') },
    { text: 'Alternate button', kind: 'alternate', onClick: () => console.log('bar') },
    { text: 'Action button', kind: 'action', onClick: () => console.log('bar') }
];