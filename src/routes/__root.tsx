import { TanStackRouterDevtools/* , UseMainLayoutPaths  */} from '@/lib/utils/route-utils'
import { NavigateOptions, ToOptions, createRootRoute, /* useLocation, */ useRouter } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SWRConfig } from 'swr'
import { HeroUIProvider } from "@heroui/react"
import { MainLayout } from '@/components/Layouts/MainLayout'
import { AnimeOutlet } from '@/components/AnimeOutlet'

const queryClient = new QueryClient();

declare module "@react-types/shared" {
  interface RouterConfig {
    href: ToOptions['to'];
    routerOptions: Omit<NavigateOptions, keyof ToOptions>;
  }
}

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const router = useRouter();
/*   const path = useLocation().pathname; */
  const Layout = /* UseMainLayoutPaths.
                  findLast(item => path.startsWith(item.path))?.element
                  ??  */
                  MainLayout;
/*   
  const ExComponents : FC[] = []; */

  return (
    <> 
      <QueryClientProvider client={queryClient}>
        <SWRConfig>
          <HeroUIProvider 
            navigate={(to, options) => router.navigate({ to, ...options })}
            useHref={(to) => router.buildLocation({ to }).href}
            className='light'
          >
            <Layout>
              <AnimeOutlet />
            </Layout>
{/* 
            {
              ExComponents.map((Component, index) => <Component key={index} />)
            } */}
          </HeroUIProvider>
        </SWRConfig>
      </QueryClientProvider>
      <TanStackRouterDevtools />
    </>
  )
}

