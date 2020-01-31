import { Fragment } from 'react'
import { HeaderSection, GroupHeading, Item, MenuSection, Separator } from '@atlaskit/navigation-next'
import { LogoPoliSura } from '../../../Utils/Consts'

const ProductNav = () => (
    <Fragment>
        <HeaderSection>
            {({ className }) => (
                <div className={ className }>
                    <LogoPoliSura styleLogo='white'/>
                </div>
            )}
        </HeaderSection>
        <MenuSection>
            {({ className }) => (
                <div className={ className }>
                    <Item text='Dashboard'/>
                    <Item text='Things' isSelected />
                    <Item text='Settings'/>
                    <Separator/>
                    <GroupHeading>Add-ons</GroupHeading>
                    <Item text='My Plugin'/>
                </div>
            )}
        </MenuSection>
    </Fragment>
)

export default ProductNav