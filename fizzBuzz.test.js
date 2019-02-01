const fizzBuzz = require('./fizzBuzz')
test('ใส่ค่า 3 ผลลัพธ์มีค่าเป็น Fizz' , () => {
    expect(fizzBuzz(3)).toBe("Fizz");
})

test('ใส่ค่า 5 ผลลัพธ์มีค่าเป็น Buzz' , () => {
    expect(fizzBuzz(5)).toBe("Buzz");
})

test('ใส่ค่า 15 ผลลัพธ์มีค่าเป็น Fizz' , () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
})

test('ใส่ค่า 2 ผลลัพธ์มีค่าเป็น 2' , () => {
    expect(fizzBuzz(2)).toBe(2);
})

test('ใส่ค่า 53 ผลลัพธ์มีค่าเป็น FizzBuzz' , () => {
    expect(fizzBuzz(53)).toBe("FizzBuzz");
})

test('ใส่ค่า 13 ผลลัพธ์มีค่าเป็น Fizz' , () => {
    expect(fizzBuzz(13)).toBe("Fizz");
})

test('ใส่ค่า 31 ผลลัพธ์มีค่าเป็น Fizz' , () => {
    expect(fizzBuzz(13)).toBe("Fizz");
})

test('ใส่ค่า 51 ผลลัพธ์มีค่าเป็น FizzBuzz' , () => {
    expect(fizzBuzz(51)).toBe("FizzBuzz");
})

test('ใส่ค่า 35 ผลลัพธ์มีค่าเป็น FizzBuzz' , () => {
    expect(fizzBuzz(35)).toBe("FizzBuzz");
})