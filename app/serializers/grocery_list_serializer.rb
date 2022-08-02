class GroceryListSerializer < ActiveModel::Serializer
  attributes :list_name, :user_id

  # has_many :items
end
