class GroceryListSerializer < ActiveModel::Serializer
  attributes :list_name

  has_many :items
end
