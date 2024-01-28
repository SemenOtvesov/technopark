export default () => {
    let timestamp = 63293;
    const field = document.getElementById('saleTime');
    setInterval(() => {
        let value = '';
        const hour = Math.floor(timestamp / 3600);
        value += hour + ':';
        value += Math.floor((timestamp - hour * 3600) / 60) + ':';
        value += timestamp % 60;

        field.innerHTML = value;
        timestamp -= 1;
    }, 1000);
};
