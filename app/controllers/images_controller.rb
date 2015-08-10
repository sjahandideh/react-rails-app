class ImagesController < ApplicationController
  respond_to :html

  def index
    json = JSON.parse(ImagesApi.new.all).with_indifferent_access

    @images = json[:data]
  end

end
