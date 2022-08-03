class GroceryListSerializer < ActiveModel::Serializer
  attributes :id, :list_name

  has_many :items
end
