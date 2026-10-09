let queue = ['30A-111', '29B-222', '51C-333'];

console.log(`Hàng đợi ban đầu : ${queue}`);

queue.push('43D-444');

console.log(`Sau khi thêm : ${queue}`);

queue.splice(0 ,0 , '14A-999');

console.log(`Xe ưu tiên : ${queue}`);

let chargingCar = queue.shift();
console.log(`Xe vào sạc : ${chargingCar}`);

let kWh =  [30, 45, 25];
let totalkWh = 0;

for(let i = 0 ; i < kWh.length ; i++){
    totalkWh += kWh[i];
}

let pricePerkWh = 4500;
let totalPrice = totalkWh * pricePerkWh;

console.log(`Tổng tiền : ${totalPrice}`);