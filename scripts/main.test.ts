import { describe, expect, test } from 'bun:test'
import { CloudflareServerLocations } from '../dist/index.js'

describe('common known locations', () => {
    test('LAX', () => {
        expect(CloudflareServerLocations["LAX"]).toContain("Los Angeles")
        expect(CloudflareServerLocations["LAX"]).toContain("United States")
    })
    test('LHR', () => {
        expect(CloudflareServerLocations["LHR"]).toBe("London, United Kingdom")
    })
    test("NRT", () => {
        expect(CloudflareServerLocations["NRT"]).toBe("Tokyo, Japan")
    })
    test("SYD", () => {
        expect(CloudflareServerLocations["SYD"]).toContain("Sydney")
        expect(CloudflareServerLocations["SYD"]).toContain("Australia")
    })
})