import { healthCheck } from "../app";

test.each([
    [{name: 'Маг', health: 90}, 'healthy'],
    [{name: 'Лучник', health: 51}, 'healthy'],
    [{name: 'Тролль', health: 50}, 'wounded'],
    [{name: 'Скелет', health: 15}, 'wounded'],
    [{name: 'Нежить', health: 14}, 'critical'],
])((
    'сhecking health values'),(unit, expectedValue) => {
        const result = healthCheck(unit);
        expect(result).toBe(expectedValue);
    });






