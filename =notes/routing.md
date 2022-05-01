
```jsx
this.router.navigate(['']);
this.router.navigate(['../'], { relativeTo: this.route });
this.router.navigate(['/404']);
this.router.navigate(['/market/', prod?.market_no]);
this.router.navigate(['market', 'sell', 'new'], { queryParams: { type: 'replica', username: this.helpsell.hps_username }, fragment: 'helpsell' });
```

```jsx
this._router.navigateByUrl('/profile', { skipLocationChange: true }).then(() => {
  this._router.navigate(['/profile/', this.currentUserInfo.profile_username], { fragment: 'contact' });
});
```

```jsx
import { Location } from '@angular/common';

constructor(
  private _location: Location,
) {}

this.location.replaceState('live-score', `?league=${selLeague}`);

this.location.go(this.router.url);

this._location.back();

location.hash
```



```html
<a nz-button nzType="default" nzDanger [routerLink]="['/admin']">어드민 화면으로 이동</a>

<a [routerLink]="['/hero', hero.id]"></a>
<!-- /hero/id -->

<a [routerLink]="['/crisis-center', { foo: 'foo' }]">Crisis Center</a>

<a [routerLink]="[section._id]" [queryParams]="{view: 'map', type: board.brd_path}" routerLinkActive="board-selected" (click)="sidebarClose()">링크</a>

<!-- [routerLinkActiveOptions]="{ exact: true }"  -->

```
마지막 / 생략 가능