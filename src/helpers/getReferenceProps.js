// @flow
const BUILT_IN_GENERIC_TYPES = ['Object', 'Function'];

export default function getReferenceProps(j: Object, props: Object) {
  return props.reduce((arr, prop) => {
    if (prop.value.type === 'GenericTypeAnnotation' && BUILT_IN_GENERIC_TYPES.indexOf(prop.value.id.name) === -1) {
      arr.push(prop);
    }
    return arr;
  }, []);
}
