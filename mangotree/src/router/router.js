import { stackNavigator } from 'react-navigator'
import Main from '../components/Main'
import Growth from '../components/Growth'
import GameOver from '../components/GameOver'

export default AppRoute = StackNavigator({
    Main: {
        screen: Main
    },
    Growth: {
        screen: Growth
    },
    GameOver: {
        screen: GameOver
    }
})