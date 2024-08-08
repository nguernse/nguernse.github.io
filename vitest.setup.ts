import "./tests/mocks/matchMedia";
import "@testing-library/jest-dom";
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})