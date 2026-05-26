import type { ComponentType } from 'react'
import { TurborepoSvg, RsaSvg, MpcSvg } from './eximbay-diagrams'
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
  'fe-independence': RsaSvg, // 임시 - 엑심베이 FE 독립 개발은 MSW 그림 재활용
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
