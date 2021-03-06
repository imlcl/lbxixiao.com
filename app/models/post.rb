class Post < ActiveRecord::Base
  mount_uploader :image, ImageUploader

  belongs_to :category

  default_scope { order(created_at: :desc) }
end
