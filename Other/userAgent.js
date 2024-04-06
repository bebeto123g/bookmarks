const devices = new RegExp(
    'Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini',
    'i'
);
console.log(devices.test(navigator.userAgent));

export const isUserMobile = () => devices.test(navigator.userAgent);
