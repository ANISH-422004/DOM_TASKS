TASK DESCRIPTION :--
_____________________
In this task, we are calculating the scroll percentage within a scrollable container in a React application. The goal is to determine how much of the content the user has scrolled, and display this as a progress bar at the top of the container. The calculation involves two key properties:

scrollHeight: This represents the total height of the content inside the container, including the invisible part (content that has been scrolled out of view).
clientHeight: This represents the height of the visible area of the container, i.e., the part of the content that is currently visible to the user.
By subtracting clientHeight from scrollHeight, we obtain the scrollable height, which is the total distance that can be scrolled within the container. Then, by comparing how far the user has scrolled (scrollTop) to this scrollable height, we calculate the scroll percentage. The percentage is used to update a visual indicator (progress bar) at the top of the container, showing the user’s current scroll position. This is a common technique used for providing feedback to users as they navigate through long lists or content.







!!!
The properties like scrollTop, scrollHeight, and clientHeight are typically associated with scrollable elements in the DOM. These properties are available on elements that have a scrollable area, either by default or through CSS, where the content exceeds the visible space.












///
1. scrollTop
Description: This property represents the number of pixels that the content of a scrollable element is currently scrolled vertically. If the top of the content is at the top of the container, scrollTop will be 0. As the user scrolls down, the value increases.
Applicable Elements: Any element that has a scrollable area can have scrollTop, such as:
<div> with overflow: scroll or overflow-y: auto.
<body> or <html> when the page is scrollable.
<textarea> if the content exceeds the visible area.
<iframe> if the content inside the iframe is scrollable.
2. scrollHeight
Description: This property returns the total height of the content inside an element, including the parts that are not visible (i.e., the content that is scrolled out of view). If the element does not have enough content to overflow, scrollHeight will be the same as clientHeight.
Applicable Elements: Similar to scrollTop, this is used with scrollable elements, such as:
<div> with overflow: scroll or overflow-y: auto.
<body> or <html> if the page content exceeds the viewport.
<textarea>.
<iframe>.
3. clientHeight
Description: This property returns the height of the visible content area of an element. It does not include the height of any content that is hidden due to scrolling (i.e., it excludes any part of the content that is outside the current viewport).
Applicable Elements: This is relevant for any element with a specific height that could be scrolled:
<div> with overflow: scroll or overflow-y: auto.
<body> or <html> when the page has enough content to scroll.
<textarea> with content that overflows.
<iframe> with overflow content.
4. Other Scroll-Related Properties:
scrollLeft: Similar to scrollTop, but for horizontal scrolling. It returns the number of pixels the content is scrolled horizontally.
scrollWidth: Similar to scrollHeight, but it returns the total width of the content inside an element, including content that is scrolled out of view horizontally.
Example:
Consider a div that has overflowed content:

html
Copy code
<div style="width: 300px; height: 400px; overflow-y: scroll;">
  <!-- Lots of content that exceeds the height of the div -->
</div>
scrollTop: Will give you the current vertical scroll position (e.g., 100px if scrolled 100px down).
scrollHeight: Will give you the total height of all the content inside the div, including the parts outside the visible area.
clientHeight: Will return the height of the visible area of the div, which in this case is 400px.
These properties are helpful when you need to track or control the scrolling behavior of any container or the entire page, and they allow you to create scroll-based interactions such as scroll indicators, infinite scrolling, or lazy loading of content.