import React from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';
import Random from 'random-js';
import styles from './Eatoo.style';
import Hero from "../Hero";
import GameRow from "./GameRow";
import TopMenu from '../../components/TopMenu/TopMenu';
import Controllers from '../../components/Controllers/Controllers';
import spaceBg from '../../assets/space_bg_dark.jpg';
import twisterBg from '../../assets/twisted_bg.jpg';
import { getBackground } from '../../redux/reducers/Game';

const Backgrounds = {
  spaceBg,
  twisterBg,
}

class Eatoo extends React.Component {
  constructor(props) {
    super(props);
    const gameRows = [
      { items: [], posX: 50 },
      { items: [], posX: 140 },
      { items: [], posX: 230 },
      { items: [], posX: 320 },
    ];
    const types = ['Empty', 'Hamburger' ,'Mushroom','Twister'];
    for(j = 0; j < 4; j++) {
      for(i = 0; i < 16; i++) {
        gameRows[j].items.push({type: types[ new Random().integer(0,types.length-1)]});
      }
    }

    this.state = { gameRows };
  }

  renderGameRows = () => {
    return this.state.gameRows.map((row,i) => (
      <View
        key={uuidv1()}
        style={[
        styles.gameColumn, 
        i === 0 && styles.gameColumnFirst, 
        i === (this.state.gameRows.length - 1) && styles.gameColumnLast,
        ]}>
        <GameRow
          items={row.items} 
          rowX={row.posX}
          />
      </View>
    ));
  }

  render() {
    return (
      <Image style={styles.backgroundImage} source={Backgrounds[this.props.background]}>
        <View style={styles.itemContainer}>
          <TopMenu timer={false} stars={false} />
          <View style={styles.gameColumns} >
              {this.renderGameRows()}
            <Hero style={styles.hero} height="70" animate={false} />
            <Controllers />
          </View>
        </View>
      </Image>
    );
  }
}

const mapStateToProps = state => ({
  background: getBackground(state),
});

export default connect(
  mapStateToProps,
  null,
)(Eatoo);