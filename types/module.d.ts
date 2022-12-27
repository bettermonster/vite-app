declare module '*.vue' {
  import defineComponent from 'vue';
  const Component: defineComponent;
  // const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
