import { describe, expect, test } from 'bun:test'
import { CloudflareServerLocations } from '../dist'

describe('common known locations', () => {
    test('LAX', () => {
        expect(CloudflareServerLocations["LAX"]).toBe("Los Angeles, CA, United States")
    })
    test('LHR', () => {
        expect(CloudflareServerLocations["LHR"]).toBe("London, United Kingdom")
    })
    test("NRT", () => {
        expect(CloudflareServerLocations["NRT"]).toBe("Tokyo, Japan")
    })
    test("SYD", () => {
        expect(CloudflareServerLocations["SYD"]).toBe("Sydney, NSW, Australia")
    })
})