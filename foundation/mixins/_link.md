# Link mixins

The link mixins take care of styling links in the Deutsche Bahn style including:

- Hover state
- Pressed state (`:active`)
- Focus ring

## Primary links

Usually a red link:

```html
<a class="my-link" href="/">A link</a>
```

```scss
.my-link {
  @include dbx-primary-link;
}
```

## Secondary links

Usually a black link:

```html
<a class="my-link" href="/">A link</a>
```

```scss
.my-link {
  @include dbx-secondary-link;
}
```

## Custom styled links

Sometimes a single color of a link might need a replacement:

```html
<a class="my-link" href="/">A link</a>
```

```scss
.my-link {
  @include dbx-primary-link($text-color: dbx-text-color('primary'));
}
```

It’s possible to override `$text-color`, `$text-color--hover` and `$text-color--pressed`.

In all three values need to be overridden, use the shorter `dbx-link` mixin. This still takes care of other important stylings to be consistent like the focus ring.

```scss
.my-link {
  @include dbx-link(
    $text-color: dbx-palette-color('green500'),
    $text-color--hover: dbx-palette-color('green600'),
    $text-color--pressed: dbx-palette-color('green800')
  );
}
```

This can be helpful in special marketing campaigns.
