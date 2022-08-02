class User < ApplicationRecord
    has_many :grocery_lists

    validates :username, uniqueness: true, length: {in: 5..8}
    validates :password, uniqueness: true, length: {in: 10..20}
end
