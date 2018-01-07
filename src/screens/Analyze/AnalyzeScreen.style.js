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
  heroImg: {
    height:80,
    marginBottom: 12,
  },
  playBtn: {
    marginTop:12,
    marginBottom:12,
    justifyContent: 'center',
    overflow:'hidden',
    backgroundColor:'rgba(58,40,0,0.7)',
    borderColor:'#f2a705',
    borderRadius:16, 
    borderWidth:2,
  },
  playBtnInside: {
    padding:30,
    paddingBottom:12,
    paddingTop:12,
    fontSize: 18,
    color: '#F9D300',
    fontWeight:'bold',
  },
  item : {
    flexDirection: 'row',
    fontSize: 18,
  },
  bgImg : {
    flex:1,
    resizeMode:'cover',
    width:null,
    height:null,
  },
});
