import { Route } from '@angular/router';

// import { RouterUtil } from '@angular-spotify/web/shared/utils';

import { LayoutComponent } from '@bandmember/shared/ui-layout';

export const shellRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: async () =>
          (await import('@bandmember/bandmember/landing/feature-shell')).FeatureShellModule,
      },

      {
        path: 'map',
        loadChildren: async () =>
          (await import('@bandmember/bandmember/map/feature-shell')).MapFeatureShellModule,
      },
      //   {
      //     path: 'contact',
      //     loadChildren: async () => (await import('@bandcamp/feature/lazy/contact')).FeatureLazyContactModule

      //   },

      //   {
      //     path: 'search',
      //     loadChildren: async () => (await import('@angular-spotify/web/search/feature')).SearchModule
      //   },
      //   {
      //     path: 'collection/playlists',
      //     loadChildren: async () =>
      //       (await import('@angular-spotify/web/playlist/feature/list')).PlaylistsModule
      //   },
      //   {
      //     path: 'collection/tracks',
      //     loadChildren: async () => (await import('@angular-spotify/web/tracks/feature')).TracksModule
      //   },
      //   {
      //     path: `playlist`,
      //     loadChildren: async () =>
      //       (await import('@angular-spotify/web/playlist/feature/detail')).PlaylistModule
      //   },
      //   {
      //     path: `albums`,
      //     loadChildren: async () =>
      //       (await import('@angular-spotify/web/album/feature/shell')).AlbumShellModule
      //   },
      // {
      //   path: '404',
      //   loadChildren: () => import('@bandcamp/ui/not-found').then((module) => module.NotFoundModule),
      //   data: { title: '404', preload: false },
      // },
      // 404 should be last
      //    { path: '**', redirectTo: '404', pathMatch: 'full' },
      //     //   {
      //     //     path: 'collection',
      //     //     redirectTo: 'collection/playlists',
      //     //     pathMatch: 'full'
      //     //   }
    ],
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];
