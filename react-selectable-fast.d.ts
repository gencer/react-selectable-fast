declare module 'react-selectable-fast' {
  interface ReactSelectableGroupProps {
      onSelection?: (selectedItems: Array<any>) => void;
      onNonItemClick?: () => void;
      tolerance?: number;
      component?: string;
      fixedPosition?: boolean;
      selectOnMouseMove?: boolean;
      preventDefault?: boolean;
      enabled?: boolean;
      [key: string]: any;
  }

  interface ReactSelectableComponentProps {
      key?: number|string;
      selected?: boolean;
      selectableKey?: number|string;
      [key: string]: any;
  }

  export class SelectableGroup extends React.Component<ReactSelectableGroupProps> {

  }

  class SelectableComponent extends React.Component<ReactSelectableComponentProps> {

  }
  export const createSelectable: (component: React.ReactNode) => typeof SelectableComponent;
}
