import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title : {
    flexDirection: 'row',
    color: '#ff0505',
    fontSize: 46,
    margin:'auto',
    paddingBottom: 24,
  },
  playBtn: {
    justifyContent: 'center',
    overflow:'hidden',
    borderRadius:12, 
    backgroundColor: '#F9D300',
    borderWidth:2,
    marginBottom:12,
    borderColor:'#f2a705'
  },
  playBtnInside: {
    fontSize: 22, 
    color: '#392701',
    fontWeight: 'bold',
    padding:8,
  },
  item : {
    flexDirection: 'row',
    fontSize: 18,
  },
  backgroundImage : {
    flex:1,
    resizeMode:'cover',
    width:null,
    height:null,
  },
});
