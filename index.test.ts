import {describe, test, expect} from "@jest/globals";
import getFirstNthTriangular from "./index";

describe("First triangle number to have over nth divisors", () => {
	test("Get triangle number to have over 5 divisors", () => {
		expect(getFirstNthTriangular(5)).toEqual(28);
	});

	test("Get triangle number to have over 5 divisors", () => {
		expect(getFirstNthTriangular(500)).toEqual(76576500);
	});
})