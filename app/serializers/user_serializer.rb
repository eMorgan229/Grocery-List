class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  # has_many :grocery_lists
end
