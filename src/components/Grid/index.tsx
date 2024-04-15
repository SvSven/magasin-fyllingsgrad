import { Wrapper } from './GridWrapper'
import { Cell } from './GridCell'

type GridCompoundProps = typeof Wrapper & {
  Cell: typeof Cell
}

const Grid = Wrapper as GridCompoundProps

Grid.Cell = Cell

export { Grid }
