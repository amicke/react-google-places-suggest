import GeoSuggest from './GeoSuggest'
import makeAsyncScriptLoader from 'react-async-script'

const callbackName = 'onloadcallback'
const URL = `https://maps.googleapis.com/maps/api/js?libraries=places&onload=${callbackName}`
const globalName = 'googleMaps'

export default makeAsyncScriptLoader(GeoSuggest, URL, {
  callbackName: callbackName,
  globalName: globalName,
  exposeFuncs: [],
})
