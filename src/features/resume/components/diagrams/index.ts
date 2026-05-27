import type { ComponentType } from 'react'
import { TurborepoSvg, MpcSvg } from './eximbay-diagrams'
import {
  PlaywrightSvg,
  PnpmSvg,
  FeIndependenceSvg,
  PdfSvg,
  ServerlessSvg,
  BackofficeUxSvg,
} from './pinoverse-diagrams'
import { LogZoomSvg, MemorySvg } from './geminai-diagrams'

export const diagramMap: Record<string, ComponentType> = {
  turborepo: TurborepoSvg,
  mpc: MpcSvg,
  playwright: PlaywrightSvg,
  pnpm: PnpmSvg,
  'fe-mock-evolution': FeIndependenceSvg,
  pdf: PdfSvg,
  serverless: ServerlessSvg,
  'backoffice-ux': BackofficeUxSvg,
  'log-zoom': LogZoomSvg,
  memory: MemorySvg,
}
