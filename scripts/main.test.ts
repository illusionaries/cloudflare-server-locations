import { describe, expect, test } from 'bun:test'
import { CloudflareServerLocations } from '../dist/index.js'

describe('common known locations', () => {
    test('LAX', () => {
        expect(CloudflareServerLocations["LAX"]).toContain("Los Angeles")
        expect(CloudflareServerLocations["LAX"]).toContain("United States")
    })
    test('LHR', () => {
        expect(CloudflareServerLocations["LHR"]).toContain("London")
        expect(CloudflareServerLocations["LHR"]).toContain("United Kingdom")
    })
    test("NRT", () => {
        expect(CloudflareServerLocations["NRT"]).toContain("Tokyo")
        expect(CloudflareServerLocations["NRT"]).toContain("Japan")
    })
    test("SYD", () => {
        expect(CloudflareServerLocations["SYD"]).toContain("Sydney")
        expect(CloudflareServerLocations["SYD"]).toContain("Australia")
    })
})