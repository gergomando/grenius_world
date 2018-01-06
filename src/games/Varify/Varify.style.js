import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  itemContainer : {
    flex:1,
  },
  backgroundImage : {
    flex:1,
    resizeMode:'cover',
    width:null,
    height:null,
    paddingBottom:16,
  },
  playBtn : {
    width:80,
    padding:8,
    flex:1,
  },
  title : {
      flexDirection: 'row',
      color: '#fff',
      fontSize: 26,
      margin:'auto',
      alignSelf:'center',
      paddingTop:0,
      fontWeight: 'bold',
  },
  equationList : {
    padding: 12,
    alignItems:'center',
    paddingBottom:0,
  },
  multiplierImage: {
    width:95, 
    alignItems:'center',
    justifyContent: 'center',
    flexDirection:'row',
    flexWrap: 'wrap',    
  },
  variable: {
    height: 36,
    width:36,
  },
  equationItem: {
    flexDirection:'row',
    height:96,
    paddingTop: 6,
    paddingBottom:6,
    justifyContent: 'center',
    borderBottomWidth:2,
    borderBottomColor: 'rgba(242,167,5,0.4)',
  },
  noBorder: {
    borderBottomWidth:0,
  },
  answerListWrapper : {
    paddingLeft: 12,
    paddingRight:12,
  },
  answerList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:8,
  },
  answerBtn: {
    justifyContent: 'center',
    height:60,
    width:60,
    overflow:'hidden',
    borderRadius:30, 
    backgroundColor:'rgba(242,167,5,0.2)',
    borderWidth:2, 
    borderColor:'#f2a705'
  },
  answerBtnText: {
    fontSize: 18,
    color: '#F9D300',
    fontWeight:'bold',
  },
  fontRed: {
    color: '#f00',
  },
  fontYellow: {
    color: '#f2a705',
  },
  maki: {
    alignSelf: 'center',
  },
  operator: {
    width:36,
    alignItems:'center',
    fontSize: 32,
    color:'#fff',
    paddingTop:16,
    paddingLeft:8,
    paddingRight:8,
    fontWeight:'bold',
  },
  resultWrapper: {
    width:110,
    fontSize: 32,
    color:'#fff',
    paddingTop:16,
    paddingLeft:12,
    fontWeight:'bold', 
  },
  result: {
    color: '#f2a705',
  },
});
