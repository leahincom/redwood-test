// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Set wrap={ScaffoldLayout} title="CardItemsInCategories" titleTo="cardItemsInCategories" buttonLabel="New CardItemsInCategory" buttonTo="newCardItemsInCategory">
        <Route path="/card-items-in-categories/new" page={CardItemsInCategoryNewCardItemsInCategoryPage} name="newCardItemsInCategory" />
        <Route path="/card-items-in-categories/{id}/edit" page={CardItemsInCategoryEditCardItemsInCategoryPage} name="editCardItemsInCategory" />
        <Route path="/card-items-in-categories/{id}" page={CardItemsInCategoryCardItemsInCategoryPage} name="cardItemsInCategory" />
        <Route path="/card-items-in-categories" page={CardItemsInCategoryCardItemsInCategoriesPage} name="cardItemsInCategories" />
      </Set>
      <Set wrap={ScaffoldLayout} title="CardItems" titleTo="cardItems" buttonLabel="New CardItem" buttonTo="newCardItem">
        <Route path="/card-items/new" page={CardItemNewCardItemPage} name="newCardItem" />
        <Route path="/card-items/{id}/edit" page={CardItemEditCardItemPage} name="editCardItem" />
        <Route path="/card-items/{id}" page={CardItemCardItemPage} name="cardItem" />
        <Route path="/card-items" page={CardItemCardItemsPage} name="cardItems" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Categories" titleTo="categories" buttonLabel="New Category" buttonTo="newCategory">
        <Route path="/categories/new" page={CategoryNewCategoryPage} name="newCategory" />
        <Route path="/categories/{id}/edit" page={CategoryEditCategoryPage} name="editCategory" />
        <Route path="/categories/{id}" page={CategoryCategoryPage} name="category" />
        <Route path="/categories" page={CategoryCategoriesPage} name="categories" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
