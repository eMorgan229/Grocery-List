class GroceryListSerializer < ActiveModel::Serializer
  attributes :list_name

  has_many :list_items
end
