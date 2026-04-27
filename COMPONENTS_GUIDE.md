# Component Guide

Complete guide to all Syncfusion components used in this application.

## Buttons

### Basic Button
```jsx
import { ButtonComponent } from '@syncfusion/react-buttons';

<ButtonComponent>Click Me</ButtonComponent>
```

### Button Variants
```jsx
// Primary Button
<ButtonComponent className="btn-primary">Primary</ButtonComponent>

// Secondary Button
<ButtonComponent className="btn-secondary">Secondary</ButtonComponent>

// Success Button
<ButtonComponent className="btn-success">Success</ButtonComponent>

// Danger Button
<ButtonComponent className="btn-danger">Danger</ButtonComponent>

// Warning Button
<ButtonComponent className="btn-warning">Warning</ButtonComponent>

// Info Button
<ButtonComponent className="btn-info">Info</ButtonComponent>

// Outline Button
<ButtonComponent className="btn-outline">Outline</ButtonComponent>

// Rounded Button
<ButtonComponent className="btn-rounded">Rounded</ButtonComponent>

// Large Button
<ButtonComponent className="btn-large">Large</ButtonComponent>

// Disabled Button
<ButtonComponent disabled>Disabled</ButtonComponent>
```

### Button with Color Theme
```jsx
const { primaryColor } = useContext(ThemeContext);
<ButtonComponent className={`btn-primary btn-${primaryColor}`}>
  Themed Button
</ButtonComponent>
```

## Chips

### Chip List
```jsx
import { ChipListComponent, ChipsComponent } from '@syncfusion/ej2-react-buttons';

<ChipListComponent>
  <ChipsComponent text="React" />
  <ChipsComponent text="TypeScript" />
</ChipListComponent>
```

### Single Selection Chips
```jsx
<ChipListComponent selectionType="Single">
  <ChipsComponent text="Option 1" />
  <ChipsComponent text="Option 2" />
  <ChipsComponent text="Option 3" />
</ChipListComponent>
```

### Multiple Selection Chips
```jsx
<ChipListComponent selectionType="Multiple">
  <ChipsComponent text="Tag 1" />
  <ChipsComponent text="Tag 2" />
  <ChipsComponent text="Tag 3" />
</ChipListComponent>
```

### Chips with Icons
```jsx
<ChipListComponent>
  <ChipsComponent text="React" leadingIconCss="e-icon-plus" />
  <ChipsComponent text="Vue" trailingIconCss="e-icon-check" />
</ChipListComponent>
```

## Dialogs

### Basic Dialog
```jsx
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { useRef } from 'react';

const dialogRef = useRef(null);

<DialogComponent
  ref={dialogRef}
  header="Dialog Title"
  showCloseIcon={true}
  width="500px"
  isModal={true}
>
  Dialog Content
</DialogComponent>

// Show dialog
dialogRef.current.show();

// Hide dialog
dialogRef.current.hide();
```

### Dialog with Buttons
```jsx
<DialogComponent
  header="Confirm Action"
  buttons={[
    { 
      buttonModel: { content: 'OK', cssClass: 'e-primary' },
      click: () => handleConfirm()
    },
    { 
      buttonModel: { content: 'Cancel', cssClass: 'e-outline' },
      click: () => dialogRef.current.hide()
    }
  ]}
>
  Are you sure?
</DialogComponent>
```

### Draggable Dialog
```jsx
<DialogComponent
  header="Draggable"
  allowDragging={true}
  allowResizing={true}
>
  Content
</DialogComponent>
```

## Tooltips

### Basic Tooltip
```jsx
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

<TooltipComponent content="Helpful text">
  <button>Hover Me</button>
</TooltipComponent>
```

### Tooltip Positions
```jsx
// Top (Default)
<TooltipComponent content="Top tooltip">
  <button>Hover Top</button>
</TooltipComponent>

// Right
<TooltipComponent content="Right tooltip" position="RightCenter">
  <button>Hover Right</button>
</TooltipComponent>

// Bottom
<TooltipComponent content="Bottom tooltip" position="BottomCenter">
  <button>Hover Bottom</button>
</TooltipComponent>

// Left
<TooltipComponent content="Left tooltip" position="LeftCenter">
  <button>Hover Left</button>
</TooltipComponent>
```

### Sticky Tooltip
```jsx
<TooltipComponent 
  content="Click to close" 
  isStickyMode={true}
>
  <button>Sticky</button>
</TooltipComponent>
```

### Tooltip with Animation
```jsx
<TooltipComponent 
  content="Animated tooltip"
  animation={{ open: { effect: 'FadeZoomIn' } }}
>
  <button>Animated</button>
</TooltipComponent>
```

## Input Components

### Text Input
```jsx
import { TextBoxComponent } from '@syncfusion/react-inputs';

<TextBoxComponent 
  placeholder="Enter text"
  change={(e) => console.log(e.value)}
/>
```

### Numeric Input
```jsx
import { NumericTextBoxComponent } from '@syncfusion/react-inputs';

<NumericTextBoxComponent 
  min={0}
  max={100}
  step={1}
  value={50}
/>
```

### Masked Input
```jsx
<TextBoxComponent
  mask="(000) 000-0000"
  placeholder="Phone Number"
/>
```

## Dropdown Components

### Dropdown List
```jsx
import { DropDownListComponent } from '@syncfusion/react-dropdowns';

const items = [
  { text: 'Option 1', value: '1' },
  { text: 'Option 2', value: '2' },
  { text: 'Option 3', value: '3' },
];

<DropDownListComponent
  dataSource={items}
  fields={{ text: 'text', value: 'value' }}
  change={(e) => console.log(e.value)}
/>
```

### Multi-Select Dropdown
```jsx
<DropDownListComponent
  dataSource={items}
  mode="CheckBox"
  fields={{ text: 'text', value: 'value' }}
/>
```

## Grid Component

### Basic Grid
```jsx
import { 
  GridComponent, 
  ColumnsDirective, 
  ColumnDirective,
  Inject,
  Page,
  Sort,
  Filter
} from '@syncfusion/react-grids';

const data = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
];

<GridComponent dataSource={data} allowPaging allowSorting allowFiltering>
  <ColumnsDirective>
    <ColumnDirective field='id' header='ID' width='100' />
    <ColumnDirective field='name' header='Name' width='150' />
    <ColumnDirective field='age' header='Age' width='100' />
  </ColumnsDirective>
  <Inject services={[Page, Sort, Filter]} />
</GridComponent>
```

## Theme Integration

### Using Theme Context
```jsx
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

function MyComponent() {
  const { isDarkMode, primaryColor, toggleTheme, setColor } = useContext(ThemeContext);

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div className={`btn-primary btn-${primaryColor}`}>
        Themed Button
      </div>
    </div>
  );
}
```

## Animation Classes

```jsx
// Fade in
<div className="fade-in">Content</div>

// Slide up
<div className="slide-up">Content</div>

// Slide down
<div className="slide-down">Content</div>

// Slide left
<div className="slide-left">Content</div>

// Slide right
<div className="slide-right">Content</div>

// Zoom in
<div className="zoom-in">Content</div>

// Pulse
<div className="pulse">Content</div>

// Bounce
<div className="bounce">Content</div>
```

## Complex Component Examples

### Form with Theme Support
```jsx
function ThemeForm() {
  const { isDarkMode, primaryColor } = useContext(ThemeContext);

  return (
    <form className={`form-container ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="form-group slide-up">
        <label>Name</label>
        <TextBoxComponent placeholder="Enter name" />
      </div>
      <div className="form-group slide-up" style={{ animationDelay: '0.1s' }}>
        <label>Category</label>
        <DropDownListComponent dataSource={categories} />
      </div>
      <ButtonComponent className={`btn-primary btn-${primaryColor}`}>
        Submit
      </ButtonComponent>
    </form>
  );
}
```

### Animated Card Grid
```jsx
function CardGrid({ items }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem'
    }}>
      {items.map((item, idx) => (
        <div key={idx} className="slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
          <div className="card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <ButtonComponent className={`btn-primary btn-${primaryColor}`}>
              Learn More
            </ButtonComponent>
          </div>
        </div>
      ))}
    </div>
  );
}
```

### Modal with Form
```jsx
function ModalForm() {
  const dialogRef = useRef(null);

  return (
    <>
      <ButtonComponent onClick={() => dialogRef.current.show()}>
        Open Form
      </ButtonComponent>

      <DialogComponent
        ref={dialogRef}
        header="User Form"
        buttons={[
          { buttonModel: { content: 'Submit', cssClass: 'e-primary' } },
          { buttonModel: { content: 'Cancel' }, click: () => dialogRef.current.hide() }
        ]}
      >
        <div className="form-container">
          <TextBoxComponent placeholder="Full Name" />
          <TextBoxComponent placeholder="Email" />
          <DropDownListComponent dataSource={departments} />
        </div>
      </DialogComponent>
    </>
  );
}
```

## Best Practices

1. **Always use context for theme**: Don't hardcode colors
   ```jsx
   const { primaryColor } = useContext(ThemeContext); // ✓
   // const color = '#2563eb'; // ✗
   ```

2. **Use animation classes for entrance**: Makes UI feel polished
   ```jsx
   <div className="slide-up">Content</div>
   ```

3. **Group related inputs in forms**: Better UX
   ```jsx
   <form>
     <fieldset>
       <legend>Personal Info</legend>
       {/* inputs */}
     </fieldset>
   </form>
   ```

4. **Use tooltips for clarity**: Helps users understand features
   ```jsx
   <TooltipComponent content="Click to expand">
     <button>Expand</button>
   </TooltipComponent>
   ```

5. **Test responsive design**: Use browser DevTools
   - Mobile: 375px width
   - Tablet: 768px width
   - Desktop: 1200px+ width

## Resources

- [Syncfusion React Button Docs](https://www.syncfusion.com/react-components/react-button)
- [Syncfusion React Dialog Docs](https://www.syncfusion.com/react-components/react-dialog)
- [Syncfusion React Tooltip Docs](https://www.syncfusion.com/react-components/react-tooltip)
- [Syncfusion React Input Docs](https://www.syncfusion.com/react-components/react-textbox)
- [Syncfusion React Dropdown Docs](https://www.syncfusion.com/react-components/react-dropdown-list)
- [Syncfusion React Grid Docs](https://www.syncfusion.com/react-components/react-data-grid)
